/** @format */

import './App.css'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Bussiness from './components/Bussiness/Bussiness'
import DigitalSucess from './components/DigitalSucess/DigitalSucess'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProjectinMind from './components/ProjectinMind/ProjectinMind'
import ServicesCard from './components/ServicesCard/ServicesCard'
import Slider from './components/Slider/Slider'
import WorkSection from './components/WorkSection/WorkSection'

function App() {
	return (
		<>
			<Slider />
			<Header />

			<About />
			<ServicesCard />
			<WorkSection />
			<DigitalSucess />
			<ProjectinMind />
			<Bussiness />
			<Footer />
			<Blogs />
		</>
	)
}

export default App
