import '../CSS/NewsHome.css';
import { NewsCards } from './NewsCards';

export const NewsHome=()=>{
    return(
        <div className="home_page">
            <h1>Welcome to News Aggregator</h1>
            <NewsCards/>
        </div>
    )
}