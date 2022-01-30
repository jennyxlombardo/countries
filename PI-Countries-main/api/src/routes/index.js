const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
//const { conn } = require('../db')
const { Country, Activities, countries_activities } = require('../db')
const { Op } = require('sequelize')
let router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
  const apiUrl = await axios.get('https://restcountries.com/v3/all')
  const apiInfo = await apiUrl.data.map(el => {
    return {
      name: el.name.common,
      id: el.cca3,
      image: el.flags[0], 
      continents: el.continents[0],
      capital: el.capital || ['No tiene capital'],
      subregion: el.subregion,
      area: Number(el.area),
      population: Number(el.population)
    }
  })
  //console.log("This give me the apiInfo:", apiInfo);
  return apiInfo
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

router.get('/activity', async (req, res, next) => {
  const { name } = req.query
  console.log(name)
  try {
    let act
    if (name) {
      act = await Activities.findAll({
        where: {
          name: name
        },
        include: Country,
      });

      act.length
        ? res.status(200).send(act)
        : res.status(404).send("Cannot find any activity");
    } else {
      act = await Activities.findAll({
        include: Country,
      });
      res.status(201).send(act);
    }
  } catch (error) {
    next(error);
  }
});


router.get('/countries', async (req, res) => {
  // /countries?name=argentina
  const { name } = req.query
  //   countries = await getApiInfo();
  let allCountries = await getApiInfo()

  const dbCountries = await Country.count()
  let countries
  if (dbCountries === 0) {
    countries = await Country.bulkCreate(allCountries)
  }
  countries = await getDb()
  try {
    if (name) {
      let countryName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%` // se filtran los paises que contengan el string que llega por query
          }
        },
        include: [
          {
            model: Activities,
            attributes: ['name'], // se relacionan las actividades de cada país
            through: {
              attributes: []
            }
          }
        ]
      })

      countryName.length
        ? res.status(200).send(countryName)
        : res.status(404).send("Country doesn't exist")
    } else {
      res.status(201).send(countries)
    }
  } catch (error) {
    next(error)
  }
})


router.get('/countries/:id', async (req, res) => {
  const countryId = req.params.id

  try {
    let detailCountry = await Country.findByPk(countryId, {
      include: [
        {
          model: Activities,
          attribute: ['name', 'difficulty', 'duration', 'season'],
          through: {
            attributes: []
          }
        }
      ]
    })
    res.status(200).send(detailCountry)
  } catch (error) {
    res.json({ error: 'invalid ID' })
  }
})

router.post('/activity', async (req, res, next) => {
  const { name, difficulty, duration, season, countries } = req.body
  console.log(name, difficulty, duration, season, countries)
  //console.log(req.body)
 
  try {
    
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

    if (countries) {
      let actCreated = await Country.findAll({ where: { name: countries } })
      await act.addCountry(actCreated)
    }
    // await act.setCountries(activity.countries)
    return res.status(200).send('Table and activity created successfully')
  } catch (error) {
    next(error)
  }
})

router.post(
  '/countries/:countryId/activity/:activityId',
  async (req, res, next) => {
    try {
      const { countryId, activityId } = req.params
      const country = await Country.findByPk(countryId)
      await country.addActivities(activityId)

      res.status(201).send('Successful relation')
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/activity/:id', async (req, res, next) => {
  const id = req.params.id
  try {
    let act = await Activities.destroy({
      where: {
        id: id
      }
    })
    return res.json({ eliminado: true })
  } catch (error) {
    next(error)
  }
})
module.exports = router
