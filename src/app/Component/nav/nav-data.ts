import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'clients',
        icon: 'fa-solid fa-paperclip',
        label: 'Clients',
        items: [
            {
                routeLink: '/clients',
                label: 'Clients List'
            }, ]
    },
    {
        routeLink: 'Transacrion',
        icon: 'fa-solid fa-table-list',
        label: 'Transactions',
        items: [
            {
                routeLink: '/view',
                label: 'Transaction'
            },
            {
                routeLink: '/add',
                label: 'Add Transaction'
            },]
    },
    {
        routeLink: '',
        icon: 'fa-solid fa-file',
        label: 'Files'
    },
    {
        routeLink: '/upload',
        icon: 'fa-solid fa-cloud-arrow-up',
        label: 'Upload File'
    },

];