import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpEventType} from '@angular/common/http';
import { env } from '../../environments/environment';

@Injectable()
export class DataTableService {
    currentPage: string;
    currentPageTitle: string;
    createButton: string;
    createButtonUrl: string;
    columnHeader: string;
    getResourcesEndpoint: string;
    viewResourceUrl: string;
    editResourceUrl: string;
    searchEndpoint: string;
    searchParam: string;
}