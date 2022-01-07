//   try {
//     const countriesDb = await Country.findAll({
//       include: {
//         model: Activity,
//         attributes: [name],
//         through: {
//           attributes: []
//         }
//       }
//     })
//     if (!name && !countriesDb) {
//       const countryFull = await Country.bulkCreate(allCountries)
//       res.status(201).send(countryFull)
//     }
//     if (name) {
//       let countryName = await Country.findAll({
//         where: {
//           name: {
//             [Op.iLike]: `%${name}%` //matches names that containes something within it
//           }
//         },
//         include: [
//           {
//             model: Activity,
//             attributes: ['name', 'difficulty', 'duration', 'season'],
//             through: {
//               attributes: []
//             }
//           }
//         ]
//       })
//       countryName.length
//         ? res.status(200).send(countryName)
//         : res.status(404).send("Country doesn't exist")
//     }
//   } catch (error) {
//     console.log(error)
//   }
// router.get('/countries/:id', async (req, res) => {
//     const countryId = req.params.id
  
//     try {
//       let idCountry = await Country.findByPk(countryId, {
//         include: [
//           {
//             model: Activity,
//             through: {
//               attributes: []
//             }
//           }
//         ]
//       })
//       res.status(200).send(idCountry)
//     } catch (error) {
//       res.json({ error: 'Invalid ID' })
//     }
//   })
  
//   router.get('/activity', (req, res, next) => {
//     return Activity.findAll()
//       .then(activity => {
//         res.status(201).send(activity)
//       })
//       .catch(error => {
//         next(error)
//       })
//   })
//const getApiInfo = async () => {
    //   const apiUrl = await axios.get(`https://restcountries.com/v3/all`)
    //   let apiInfo = await apiUrl.data.map(a => {
    //     return {
    //       name: a.name.common,
    //       id: a.cca3,
    //       flags: a.flags[0] ? a.flags[0] : 'Flag cannot be found',
    //       continents: a.continents,
    //       capital: a.capital, //|| ['Capital cannot be found'],
    //       region: a.region,
    //       subregion: a.subregion,
    //       area: Number(a.area),
    //       population: Number(a.population)
    //     }
    //   })
    
    //   return apiInfo
    // }
    
    // const getdDbInfo = async () => {
    //   return await Country.findAll({
    //     include: {
    //       model: Activity,
    //       attributes: ['name'],
    //       through: {
    //         attributes: []
    //       }
    //     }
    //   })
    // }
    
    // const getAllCountries = async () => {
    //   const apiInfo = await getApiInfo()
    //   const dbInfo = await getdDbInfo()
    //   const infoTotal = apiInfo.concat(dbInfo)
    //   return infoTotal
    // }
    
    // router.get('/countries', async (req, res) => {
    //   const name = req.query.name //asks if there is a name by query
    //   const allCountries = await getAllCountries()
    
    //   if (name) {
    //     let countryName = await allCountries.filter(a =>
    //       a.name.toLowerCase().includes(name.toLowerCase())
    //     )
    //     countryName.length
    //       ? res.status(200).send(countryName)
    //       : res.status(404).send(`This country doesn't exist`)
    //   } else {
    //     res.status(200).send(allCountries)
    //   }
    // })
    
    // router.get('/activity', async (req, res) => {
    //   const activityApi = await axios.get('https://restcountries.com/v3/all')
    //   const activities = activityApi.data.map(a => a.name)
    //   const actEach = activities.map(b => {
    //     for (let i = 0; i < b.length; i++) return b[i]
    //   })
    //   console.log(actEach)
    //   actEach.forEach(b => {
    //     Activity.findOrCreate({
    //       where: { name: b }
    //     })
    //   })
    //   const allActivities = await Activity.findAll()
    //   res.send(allActivities)
    // })
    
    // router.post('/activity', async (req, res) => {
    //   const { name, difficulty, duration, season } = req.body
    //   const newActivity = await Activity.create({
    //     name,
    //     season,
    //     difficulty,
    //     duration,
    //    // createdInDb
    //   })
    //   const activityDb = await Country.findAll({
    //       where: { name : Activity }
    //   })
    //   newActivity.addActivity(activityDb)
    //   res.send("Activity created successfully")
    //   //res.json(newActivity)
    // })
    
