import { materials } from '../material';

interface DisplayMaterialsProps {
    searchQuery : string
}

const DisplayMaterials : React.FC<DisplayMaterialsProps> = ({searchQuery}) => {

    const filteredMaterials = materials.filter((material) =>
        Object.values(material)
            .join(" ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    return <>
        {filteredMaterials.map((material, index) => (
            <div
                key={index}
                className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center text-center"
            >
                <h2 className="text-xl font-semibold mb-2">{material.title}</h2>
                <a href={material.driveLink} className="text-blue-500 hover:underline mb-2">
                    Drive Link 
                </a>
                <p className="text-gray-500">Semester: {material.semester}</p>
                <p className="text-gray-500">Department: {material.department}</p>
            </div>
        ))}
    </>


}


export default DisplayMaterials;