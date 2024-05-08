import React from 'react';

const Maintainers = () =>{
    return (
        <div className="flex justify-center mt-8">
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Maintainers</h2>
                <p className="mb-4">Here are the maintainers of the project:</p>
                <ul className="list-disc list-inside mt-4">
                    <li className="flex items-center mb-2">
                        <img src="https://avatars.githubusercontent.com/u/67964054?s=400&u=55e2235b95ee24beab93a1d34c4a382cc4cb9efa&v=4" alt="Krish Soni" className="inline-block mr-2 rounded-full" width="48" height="48" />
                        <span>
                            Krish Soni (<a href="https://github.com/krishvsoni" target="_blank" rel="noopener noreferrer">@krishvsoni</a>)
                        </span>
                    </li>
                    <li className="flex items-center mb-2">
                        <img src="https://avatars.githubusercontent.com/u/115367435?v=4" alt="Dishant Miyani" className="inline-block mr-2 rounded-full" width="48" height="48" />
                        <span>
                            Dishant Miyani (<a href="https://github.com/Dishant1804" target="_blank" rel="noopener noreferrer">@Dishant1804</a>)
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Maintainers;