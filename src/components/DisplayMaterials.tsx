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
                className="bg-white rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-gray-100 hover:shadow-lg transition duration-300 "
            >
                <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-500 transition duration-300 ">{material.title}</h2>
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