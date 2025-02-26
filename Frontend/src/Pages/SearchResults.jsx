import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaClock, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import "../Style/Events.css"; // ✅ Reuse Events CSS
import api from "../services/api";

const SearchResults = () => {
    const [events, setEvents] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await api.get(`/searchEvents?q=${query}`);
                setEvents(response.data.events);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        fetchSearchResults();
    }, [query]);

    const handleViewDetail = (eventId) => {
        navigate(`/eventDetail/${eventId}`);
    };

    return (
        <div className="events-container">
            <h1 className="events-title">Search Results for "{query}"</h1>
            <div className="events-list">
                {events.length > 0 ? (
                    events.map((event) => (
                        <div key={event._id} className="event-card">
                            <div className="event-content">
                                <div className="event-info">
                                    <div className="event-header">
                                        <FaClock className="event-icon" />
                                        <span className="event-time">{event.time}</span>
                                        <span className="status-badge">Going</span>
                                    </div>
                                    <hr className="divider" />
                                    <h2 className="event-title">{event.title}</h2>
                                    <p className="event-description1">{event.shortDescription}</p>
                                    <hr className="divider" />
                                    <div className="event-details">
                                        <span className="event-creator">
                                            <FaUsers className="event-icon" /> by {event.createdByEmail || "Unknown User"}
                                        </span>
                                        <span className="event-location">
                                            <FaMapMarkerAlt className="event-icon" /> {event.location}
                                        </span>
                                    </div>
                                    <button 
                                        className="view-detail-button"
                                        onClick={() => handleViewDetail(event._id)}
                                    >
                                        View Detail
                                    </button>
                                </div>
                                <div className="event-image-container">
                                    <img src={event.imageUrl} alt={event.title} className="event-image" />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-events">No events found</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
