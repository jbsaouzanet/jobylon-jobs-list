import {Company} from './company.model';
import {Contact} from './contact.model';
import {Location} from './location.model';
import {Video} from './video.model';
import {Urls} from './urls.model';
export interface Jobs {
    id: number;
    categories: any;
    company: Company;
    contact: Contact;
    departments: any;
    title: String
    slug: String,
    descr: String,
    function: String,
    experience: String,
    employment_type: String,
    from_date: Date,
    to_date: Date,
    language: String,
    locations: Array<Location>,
    video: Video,
    urls: Urls,
    skills: String
}