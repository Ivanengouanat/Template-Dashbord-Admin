import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const Barchar = ({ isDashboard = false }) => {
  // Barchar : Un composant fonctionnel qui accepte une prop isDashboard.
  // La prop isDashboard est utilisée pour déterminer certaines configurations dans le composant Barchar. Par exemple, elle est utilisée pour définir si des légendes doivent être affichées sur les axes.
  // legend: isDashboard ? undefined : "country",
  // isDashboard = false signifie que si isDashboard n'est pas fourni lors de l'appel du composant, sa valeur par défaut sera false.
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar // ResponsiveBar : Un composant de bibliothèque Nivo pour créer des graphiques à barres responsives.
      data={data} // data : Données passées au graphique.
      theme={{
        /* theme : Personnalise l'apparence du graphique.
                  Axe, légendes, et ticks sont stylisés avec les couleurs du thème. */
        // added
        axis: {
          domain: {
            line: {
              // pour les liges Horizontales et vertical
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              // pour les titres de chaque axe(horizontale et verticale) dans notre cas sa represente country et food
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              // pour les textes sur l'axe horizontale et vertical
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]} // keys : Les clés des données pour chaque barre.
      indexBy="country" // indexBy : L'index des données (ici, les pays).
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }} // valueScale et indexScale : Échelles pour les valeurs et les index.
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }} // colors : Schéma de couleurs pour le graphique.
      defs={[
        // defs : Définitions pour des motifs (points et lignes).
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null} // axisTop, axisRight, axisBottom, axisLeft : Configuration des axes.
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false} // enableLabel : Désactive les étiquettes sur les barres.
      labelSkipWidth={12} // labelSkipWidth, labelSkipHeight : Ignore les étiquettes pour les petites barres.
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        // legends : Configuration des légendes.
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application" // role et barAriaLabel : Accessibilité.
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default Barchar;
