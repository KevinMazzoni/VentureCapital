export default async (models) => {
    const projects = [
        {
            name: "GreenMe",
            url: "/_nuxt/assets/projects/GreenEnergy.jpeg",
            caption: 'GreenMe aims at generating green energy from multiple renewable sources. It has been awarded as one of the most disruptive company in the sector.'
        },
        {
            name: 'IntelliHire',
            url:'/_nuxt/assets/projects/IntelliHire.jpg', 
            caption: 'IntelliHire revolutionizes the interview process of a company, by using AI to perform a CV screening and the first step of the interview.'
        },
        {
            name: 'AiMed',
            url:'/_nuxt/assets/projects/Healthcare_3.jpeg', 
            caption: 'AiMed aims at revolutionze the healthcare sector, putting in contact patients that suffers from a disease with a specialised doctor.'
        },
        {
            name: 'Edu4You',
            url:'/_nuxt/assets/projects/Education.jpeg', 
            caption: '"Unlocking Knowledge, Empowering Minds - Transforming Education, One Student at a Time!" This is the motto of Edu4You.'
        }
    ]

    await models.Project.bulkCreate(projects);
}