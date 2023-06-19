export default async (models) => {
    const dogValues = [
        {
            name: "Dog",
            breed: "Breed",
            age: 1
        },
        {
            name: "Dog0",
            breed: "Breed",
            age: 1
        },
        {
            name: "Dog1",
            breed: "Breed",
            age: 10
        },
        {
            name: "Dog2",
            breed: "Breed",
            age: 1
        },
        {
            name: "Dog3",
            breed: "Breed",
            age: 6
        },
    ]

    await models.Dog.bulkCreate(dogValues);
}