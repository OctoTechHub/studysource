import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';

const Contributors: React.FC = () => {
  const [contributors, setContributors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/OctoTechHub/studysource/contributors'
        );
        setContributors(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contributors:', error);
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  return (
    <div
      className="h-screen pt-0 flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, #3498db, #2ecc71)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white shadow rounded-lg p-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Contributors <FontAwesomeIcon icon={faUsers} className="mr-2" /> </h2>
        <p className="mb-4">
          Want to get featured here? Contribute to the project and make it better!
        </p>
        {loading? (
          <div className="flex justify-center mb-4">
            <svg
              className="animate-spin h-5 w-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        ) : (
          <ul>
            {contributors.map((contributor) => (
              <li className="flex items-center mb-4" key={contributor.id}>
                <img
                  src={contributor.avatar_url}
                  className="inline-block mr-2 rounded-full w-12 h-12"
                  width="48"
                  height="48"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://github.com/${contributor.login}`}
                      title={`Visit ${contributor.login}'s profile`}
                    >
                      {contributor.login}
                    </a>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Contributors;