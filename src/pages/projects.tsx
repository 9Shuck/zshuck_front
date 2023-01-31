import SplitBanner from "@/components/splitBanner"
import ProjectHeader from "@/components/projectHeader"
import ProjectWidget from "@/components/projectWidget"
import ContactBanner from "@/components/contactBanner"
import TechnologyWidget from "@/components/technologyWidget"

const Project = () => (
    <>
    <div className="projectContainer">
        <ProjectHeader/>
        <div className="projectContainer__title">
            <div id="projects">PROYECTOS</div>
            <div className="projectContainer__title_dec"></div>
        </div>
        <ProjectWidget/>
        <div className="projectContainer__title">
            <div id="technologies">TECNOLOGÍAS</div>
            <div className="projectContainer__title_dec"></div>
        </div>
        <TechnologyWidget/> 
        <div  className="projectContainer__splitBanner">
            <SplitBanner/>
        </div>
    <ContactBanner/>
    </div>

    </>
)

export default Project