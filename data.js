// Remplace 'rob' par un utilisateur public ListenBrainz ayant beaucoup d'écoutes
const username = 'rob'; 
const endpoint = `https://api.listenbrainz.org/1/user/${username}/listens?count=50`;

async function fetchTimeData() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    // Extraction et transformation des données pour ta DataViz
    const formattedData = data.payload.listens.map(item => {
      const dateObj = new Date(item.listened_at * 1000); // Conversion Timestamp UNIX -> Date JS

      return {
        artist: item.track_metadata.artist_name,
        track: item.track_metadata.track_name,
        release: item.track_metadata.release_name,
        timestamp: item.listened_at,
        fullDate: dateObj,
        // Dimensions temporelles utiles pour regrouper tes graphiques
        year: dateObj.getFullYear(),
        month: dateObj.getMonth() + 1,
        day: dateObj.getDate(),
        hour: dateObj.getHours()
      };
    });

    console.log("Données structurées pour ta DataViz :", formattedData);
    return formattedData;

  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}

fetchTimeData();
