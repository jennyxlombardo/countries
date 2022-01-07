const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
//const { Country, Activities } = require('../db')

const { conn } = require('../db')
const { Country, Activities } = conn.models
const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
  const { data } = await axios('https://restcountries.com/v3/all')

  const apiInfo = await data.map(el => {
    return {
      name: el.name.common,
      id: el.cca3,
      flags: el.flags[0] ? el.flags[0] : 'Image not Found',
      continents: el.continents[0],
      capital: el.capital?.[0] || ['Capital not found'],
      subregion: el.subregion,
      area: el.area,
      population: el.population
    }
  })
  //console.log('ESTO ME DEVUELVE LA API:', apiInfo)
  //return apiInfo
  const result = await Country.bulkCreate(apiInfo)
  return result
}

const getDb = async () => {
  //db and activity
  return await Country.findAll({
    include: {
      model: Activities,
      attributes: ['name', 'difficulty', 'duration', 'season'],
      through: {
        attributes: []
      }
    }
  })
}

const getDbActivity = async () => {
  return await Activities.findAll({
    include: {
      model: Country,
      attribute: ['name:', 'flags', 'continents', 'capital'],
      through: {
        attributes: []
      }
    }
  })
}
//---------------------------------yes ----------------------------------------------------------
// router.get('/countries', async (req, res, next) => {
//   const allCountries = await getApiInfo()
//   try {
//     let countries = await Country.create(allCountries)
//     res.status(200).send(countries)
//   } catch (error) {
//     next(error)
//   }
// })

router.get('/activity', async (req, res) => {
  const activities = await getDbActivity()
  const { name } = req.query
  res.status(200).send(activities)
})

router.get('/countries', async (req, res) => {
  // /countries?name=argentina
  const { name } = req.query
  //   countries = await getApiInfo();
  let countries
  const countryDB = await Country.count() //country registry
  countries =
    countryDB === 0
      ? await getApiInfo() // if db is empty
      : await getDb() // database
  if (name) {
    console.log('name', name)
    const byName = countries.filter(n =>
      n.name.toLowerCase().includes(name.toLowerCase())
    )
    byName.length
      ? res.status(200).send(byName)
      : res.status(404).json({ error: `Couldn't find country` })
  } else {
    res.status(200).send(countries)
  }
})

router.get('/countries/:id', async (req, res) => {
  const { id } = req.params
  const allCountries = await getDb()
  if (id) {
    const idCountries = allCountries.filter(i => i.id === id)
    idCountries.length
      ? res.status(200).send(idCountries)
      : res.status(404).send('id not valid')
  }
})

// router.post('/activity', async (req, res) => {
//   let { name, difficulty, duration, season, countriesId } = req.body

//   const createActivity = await Activities.create({
//     name,
//     difficulty,
//     duration,
//     season
//   })

//   if (countriesId) {
//     //  console.log('este son los countriesId',countriesId,createActivity)
//     await createActivity.addCountries(countriesId) // magic methods from sequelize
//   }

//   return res.status(200).json({ message: 'Success, congratulations', createActivity })
// })
router.post('/activity', async (req, res, next) => {
  const { name, difficulty, duration, season, country } = req.body
  //console.log(req.body)
  // name, difficulty, duration, seasons, countries:[names]
  try {
    //Se crea la actividad sin los paises
    let [act, created] = await Activities.findOrCreate({
      //created is a boolean and if it was created correctly shows true or false in the console.
      where: {
        name,
        difficulty,
        duration,
        season
      }
    })
    //Shows whether it was created or not
    console.log(created)

    //Setting the relationship between activity_countries

    if (country) {
      let actCreated = await Country.findAll({ where: { name: country } })
      await act.addCountry(actCreated)
    }
    // await act.setCountries(activity.countries)
    return res.status(200).send("Table and activity created successfully")
  } catch (error) {
    next(error)
  }
})

//--------------------------------------------nope ----------------------------------------------
// router.get('/countries', (req, res, next) => {
//   return Country.findAll({
//     include: Activities
//   })

//     .then(countries => {
//       res.send(countries)
//     })
//     .catch(error => {
//       next(error)
//     })
// })

//--------------------------------otro nope ------------------------------------------------------
// router.get('/countries', async (req, res, next) => {
//   const { name } = req.query
//   let allCountries = await getApiInfo()

//   const dbCountries = await Country.count()

//   if (dbCountries === 0) {
//     let azul = await Country.bulkCreate(allCountries)

//   }
//   let countries = await getDb()

//   try {
//     if (name) {
//       let countryName = await Country.findAll({
//         where: {
//           name: {
//             [Op.iLike]: `%${name}%` // se filtran los paises que contengan el string que llega por query
//           }
//         },
//         include: [
//           {
//             model: Activities,
//             attributes: ['name', 'difficulty', 'duration', 'season'], // se relacionan las actividades de cada país
//             through: {
//               attributes: []
//             }
//           }
//         ]
//       })

//       countryName.length
//         ? res.status(200).send(countryName)
//         : res.status(404).send('No se existe el pais buscado')
//     } else {
//       res.status(200).send(countries)
//     }
//   } catch (error) {
//     next(error)
//   }
// })

module.exports = router
