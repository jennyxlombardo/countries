// const dispatch = useDispatch()
// const allCountries = useSelector(state => state.filterCountries)
// const [currentPage, setCurrentPage] = useState(1)
// const [countriesPerPage] = useState(10)
// const indexLast = currentPage * countriesPerPage
// const indexFirst = indexLast - countriesPerPage
// const currentCountries = allCountries.slice(indexFirst, indexLast)
// const totalCountries = Math.ceil(allCountries / countriesPerPage)

// const [trigger, setTrigger] = useState([])
// //   const pagination = pageNumber => {
// //     setCurrentPage(pageNumber)
// //   }

// useEffect(() => {
//   dispatch(getCountries())
// }, [dispatch])

// function handleSelect (e) {
//   dispatch(orderByCont(e.target.value))
// }

// function handleSelectActivity (e) {
//   dispatch(orderByActivity(e.target.value))
// }

// function handleSubmit (e) {
//   e.preventDefault()
// }

// const handleChangePage = type => {
//   if (type === '-') {
//     setCurrentPage(currentPage === 1 ? totalCountries : currentPage - 1)
//   } else {
//     setCurrentPage(currentPage === totalCountries ? 1 : currentPage + 1)
//   }
// }

// const orderCountriesByPop = type => {
//   dispatch(filterByPop(type))
//   setTrigger([...trigger, 1])
// }

// return (
//   <div>
//     <NavBar />
//     <div>
//       {currentCountries.map(c => {
//         return (
//           <NavLink to={`/home/details/${c.name}`}>
//             <button className='btnCard'>
//               <div className='cards'>
//                 <h3>{c.name}</h3>
//                 <p>{c.region}</p>
//                 <img className='flags' src={c.image} alt='Not found' />
//               </div>
//             </button>
//           </NavLink>
//         )
//       })}
//       {allCountries > countriesPerPage && (
//         <div className='page'>
//           <button className='pageBtn' onClick={() => handleChangePage('-')}>
//             -
//           </button>
//           <span>{currentPage}</span>
//           <button className='pageBtn' onClick={() => handleChangePage('+')}>
//             +
//           </button>
//         </div>
//       )}
//     </div>

//     <div>
//       <p>By Name</p>
//       <button onClick={() => getCountries('ASC')}>A-Z</button>
//       <button onClick={() => getCountries('DSC')}>Z-A</button>

//       <p>By Population</p>
//       <button onClick={() => orderCountriesByPop('MAX')}>Max-Min</button>
//       <button onClick={() => orderCountriesByPop('MIN')}>Min-Max</button>

//       <p>By Continent</p>
//       <select name='continent' onChange={handleSelect}>
//         <option disabled>Continent</option>
//         <option value='Africa'>Africa</option>
//         <option value='North America'>North America</option>
//         <option value='South America'>South America</option>
//         <option value='Asia'>Asia</option>
//         <option value='Europe'>Europe</option>
//         <option value='Oceania'>Oceania</option>
//         <option value='Antarctica'>Antarctica</option>
//       </select>

//       <p>By Activity</p>
//       <form onSubmit={handleSubmit}>
//         <select name='Activity' value='null' onChange={handleSelectActivity}>
//           <option value='All'>All activities</option>
//           {getActivities?.map(a => (
//             <option value={a.id} key={a.key}>
//               {a.name}
//             </option>
//           ))}
//         </select>
//       </form>
//     </div>
//   </div>
// )
//     function handleFilterContinent(e){
//         dispatch(orderByCont(e.target.value)) //payload que toma como valor el value de option
//     }

//     function handleFilterActivity(e){
//         dispatch(orderByActivity(e.target.value))
//         console.log(dispatch(orderByActivity(e.target.value)))
//     }

//     // function handleNameSort(e){
//     //     e.preventDefault();
//     //     dispatch(filterByName(e.target.value))
//     //     setCurrentPage(1);
//     //     setOrder(`Ordered ${e.target.value}`)

//     // }

//     // function handlePopulationSort(e){
//     //     e.preventDefault();
//     //     dispatch(filterByPop(e.target.value))
//     //     setCurrentPage(1);
//     //     setOrderPopulation(`Ordered ${e.target.value}`)

//     // }

// return(
//     <div className="home">

//     <div>
//     {/* <div className="divfilter">
//     {/* <h1 className="h1">VIAJA POR EL MUNDO</h1> */}

//     {/* </div>  */}

//     <nav className="nav">

//     <SearchBar/>
//         <span className="spanfilter">Ordenar alfabeticamente</span>
//         <select className="selectfilter">
//             <option value="All">Seleccione</option>
//             <option value= "asc">Ascendente</option>
//             <option value= "desc">Descendente</option>
//         </select>
//     <span className="spanfilter">Ordenar por poblacion</span>
//         <select className="selectfilter">
//             <option value="All">Seleccione</option>
//             <option value= "asc">Ascendente</option>
//             <option value= "desc">Descendente</option>
//         </select>
//     <span className="spanfilter">Filtra por pais</span>
//         <select className="selectfilter" onChange={e=>handleFilterContinent(e)}>
//             <option value="All">Seleccione</option>
//             <option value="Americas">America</option>
//             <option value="Europe">Europa</option>
//             <option value="Asia">Asia</option>
//             <option value="Africa">Africa</option>
//             <option value="Oceania">Oceania</option>
//             <option value="Polar">Polar</option>
//         </select>
//     {/* <span className="spanfilter">Filtra por actividad</span>
//         <select className="selectfilter" onChange={e=>handleFilterActivity(e)}>
//         <option value="All">Seleccione</option>
//         {allActivities?.length &&
//             allActivities.map(a=>{return(
//                 <option key={a.id} value={a.name}>{a.name}</option>
//             )})

//             }

//         </select>
//         <Link to= "/activity"><button className="buttoncrearact">Agregar una actividad</button></Link>
//         </nav> */}

//     {

//         currentCountries && currentCountries.map(el=>{
//             return(
//                 <div className="cardhome">
//                     <Link to={"/home/"+ el.id}>
//                     <Card key={el.id} country={el}/>
//                     </Link>
//                 </div>
//             );
//         })
//     }
// { <div>
// <Pagination countriesPerPage={countriesPerPage} allCountries= {allCountries.length} paginado= {paginado} />
// </div>           }
//     </div>

// </div>
// )
// }
