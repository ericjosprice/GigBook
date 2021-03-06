module.exports = function( sequelize, DataTypes ) {
    var Artist = sequelize.define("Artist", {
        artistName: DataTypes.STRING,
        genre: DataTypes.STRING,
        instrumentation: DataTypes.STRING,
        numberOfMembers: DataTypes.INTEGER,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        profileImage: DataTypes.TEXT,
        website: DataTypes.STRING
    });

    // // Associate artist to gigs through the requests table. Alias potential gig
    // also associate artist to user table
    Artist.associate = function( models ) {
        models.Artist.belongsToMany(models.Gig, {as: "PotentialGig", through: "Requests"})
        models.Artist.belongsTo(models.User);
    };

    return Artist;
};