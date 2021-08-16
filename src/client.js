import sanityClient from '@sanity/client'

export default sanityClient({
    projectId:"3gmjglyy",
    dataset:"production",
    apiVersion: '2021-08-16',
    useCdn: true,
})