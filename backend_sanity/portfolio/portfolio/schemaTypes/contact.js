export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(2)
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().email()
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text',
            validation: Rule => Rule.required().min(10)
        }
    ]
}
