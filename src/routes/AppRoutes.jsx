import {  Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import CategpryPage from '../pages/CategoryPage/CategpryPage'

const AppRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/categories/:id' element={<CategpryPage />} />
        </Routes>
  )
}

export default AppRoutes
