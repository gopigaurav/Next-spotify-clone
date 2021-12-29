import Body from "./body"
import Right from "./right"
import Sidebar from "./sidebar"
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
})

function Dashboard() {
    return (
        <main>
            <Sidebar />
            <Body spotifyApi={spotifyApi} />
            <Right />
        </main>
    )
}

export default Dashboard
