import { Injectable } from '@angular/core';
import { Subscription, Observable, Observer } from 'rxjs';

import { HttpService, Status, Store, StoreFactory } from 'app/shared';
import { Resources } from 'app/models';

const RESOURCE_MOCK_FACTORY = id => {  
    return resourceMock(
        id,
        [
            resourceMock(`${id}-0`),
            resourceMock(`${id}-1`),
            resourceMock(`${id}-2`),
        ]
    );
}

interface ResourceStoreState {
    status: Status;
    resource: Resources.Resource;
}

@Injectable()
export class ResourceStore {

    private _store: Store<ResourceStoreState>;
    private _request: Subscription;

    constructor(
        storeFactory: StoreFactory<ResourceStoreState>,
        private _http: HttpService,
    ) {
        this._store = storeFactory.new(this._emptyState());
    }

    get resource() {
        return this._store.state.filter(state => state.status != Status.NotInitialized).map(state => state.resource);
    }

    get status() {
        return this._store.snapshot.status;
    }

    get(resourceId: string) {
        this._store.nextState(state => ({
            status: Status.Loading,
            resources: [],
        }));

        if (this._request) {
            this._request.unsubscribe();
        }

        this._request = 
            // this._http.get(`/api/v1/resource/${resourceId}`)
            //     .map(response => response.json())
                Observable.create((observer: Observer<any>) => {
                    console.info(`TODO: call GET /api/v1/resource/${resourceId}`);
                    
                    // simulate server loading
                    setTimeout(() => {
                        observer.next(RESOURCE_MOCK_FACTORY(resourceId));
                        observer.complete();
                    }, 250);
                })
                .subscribe(
                    resource => {
                        this._store.nextState(state => ({
                            status: Status.Ready,
                            resource
                        }));
                    },
                    error => {
                        this._store.nextState(state => ({
                            status: Status.Failed,
                        }));
                    });
    }

    private _emptyState() {
        return {
            status: Status.NotInitialized,
        } as ResourceStoreState;
    }
}

function resourceMock(id: string, relatedResources: Resources.Resource[] = []) {
    return {
        "id": id,
        "title": `Resource #${id}`,
        "reviewCount": 3,
        "type": `Type${id}`,
        "urlShort": "www.youtube.com",
        "tags": ["tag1","tag2","tag3"],
        "rating": 5,
        "relatedResources": relatedResources,
    }
} 