"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("todos", "statut", {
      type: Sequelize.STRING,
      defaultValue: "EN_COURS",
      allowNull: false
    })
    // Il manque quelque chose ici...  A vous de l'ajouter !
    await queryInterface.sequelize.query(
        "UPDATE todos SET statut = 'EN RETARD' WHERE date_echeance < now()")
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("todos", "statut")
  }
}
