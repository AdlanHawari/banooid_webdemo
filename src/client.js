import sanityClient from '@sanity/client'

export default sanityClient({
    projectId:"3gmjglyy",
    dataset:"production",
    useCdn: true,
})