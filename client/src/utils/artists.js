import axios from "axios";

export default {
    // Gets all gigs
    getGigs: function() {
      return axios.get("/api/artists");
    },

};