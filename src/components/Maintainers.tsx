import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';

const Maintainers: React.FC = () => {
  const [contributors, setContributors] = useState<any[]>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/OctoTechHub/studysource/contributors'
        );
        setContributors(response.data);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">
          Maintainers <FontAwesomeIcon icon={faUsers} className="mr-2" />
        </h2>
        <p className="mb-4">Here are the maintainers of the project:</p>
        <ul className="list-disc list-inside mt-4">
          <li className="flex items-center mb-2">
            <img
              src="https://avatars.githubusercontent.com/u/67964054?s=400&u=55e2235b95ee24beab93a1d34c4a382cc4cb9efa&v=4"
              alt="Krish Soni"
              className="inline-block mr-2 rounded-full"
              width="48"
              height="48"
            />
            <span>
              Krish Soni (
              <a
                href="https://github.com/krishvsoni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                @krishvsoni
              </a>
              )
            </span>
          </li>
          <li className="flex items-center mb-2">
            <img
              src="https://avatars.githubusercontent.com/u/115367435?v=4"
              alt="Dishant Miyani"
              className="inline-block mr-2 rounded-full"
              width="48"
              height="48"
            />
            <span>
              Dishant Miyani (
              <a
                href="https://github.com/Dishant1804"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                @Dishant1804
              </a>
              )
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-white shadow rounded-lg p-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Contributors</h2>
        <p className="mb-4">
          Want to get featured here? Contribute to the project and make it better!
        </p>
        <div className="grid grid-cols-2 gap-4">
          {contributors.map((contributor) => (
            <div className="flex items-center" key={contributor.id}>
              <img
                src={contributor.avatar_url}
                className="inline-block mr-2 rounded-full"
                width="48"
                height="48"
              />
              <span>
                {contributor.login} (
                <a
                  target="_blank"
                  rel="noopener noreferrer"className="text-blue-500 underline"
                >
                  @{contributor.login}
                </a>
                )
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintainers;