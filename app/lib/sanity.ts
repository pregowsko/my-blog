import {createClient} from "next-sanity";

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: '5w5e32d0',
    useCdn: false,
});