import React from 'react';
import charactersData from '../data/characters.json';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    // to be replaced with the real data
    const characters = charactersData

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };
    const data = [
        { subject: 'Force', A: characters[option1.value].capacities.force, B: characters[option2.value].capacities.force },
        { subject: 'Intelligence', A: characters[option1.value].capacities.intelligence, B: characters[option2.value].capacities.intelligence },
        { subject: 'Durability', A: characters[option1.value].capacities.durability, B: characters[option2.value].capacities.durability },
        { subject: 'Energy', A: characters[option1.value].capacities.energy, B: characters[option2.value].capacities.energy },
        { subject: 'Speed', A: characters[option1.value].capacities.speed, B: characters[option2.value].capacities.speed },
    ];
    

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
                <select
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <p style={centerStyle}>
                <img src={`${characters[option1.value].thumbnail.path}/standard_large.${characters[option1.value].thumbnail.extension}`} alt={characters[option1.value].name} />
                
                <img src={`${characters[option2.value].thumbnail.path}/standard_large.${characters[option2.value].thumbnail.extension}`} alt={characters[option2.value].name} />
            </p>

            <p style={centerStyle}>
                    <span style={{color: 'blue'}}>{characters[option1.value].name}</span> 
                     vs  
                    <span style={{color: 'green'}}>{characters[option2.value].name}</span>
                </p>
           
    
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name={characters[option1.value].name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={characters[option2.value].name} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                </RadarChart>



        
        </>
    );
};

export default CompareCharactersPage;