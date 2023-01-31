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
            <div>PROYECTOS</div>
            <div className="projectContainer__title_dec"></div>
        </div>
        <ProjectWidget/>
        <div className="projectContainer__title">
            <div>TECNOLOGÍAS</div>
            <div className="projectContainer__title_dec"></div>
        </div>
        <TechnologyWidget/>
        <SplitBanner/>
    <ContactBanner/>
    </div>

    </>
)

export default Project