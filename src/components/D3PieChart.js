import { useEffect } from "react";
// import * as d3 from "d3";

const drawChart = (data = []) => {
    // Mettre ici le code pour dessiner le graphique et le rattacher à la div avec l'id pie-container
};

export default function D3PieChart({
    data,
}) {
    // useEffect est un hook qui permet d'exécuter du code lorsque les données sont chargées
    useEffect(() => {
        let transformData = []

        // Transformer les données pour les mettre dans le format attendu par d3.js
        

        // draw the chart
        drawChart(transformData);
    }, [data]);

    return (
        // div qui contiendra le graphique
        <div id="pie-container" />
    );
}