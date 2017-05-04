import { Injectable } from '@angular/core';
import { Subscription, Observable, Observer } from 'rxjs';

import { HttpService, Status, Store, StoreFactory } from 'app/shared';
import { Feedback } from 'app/models';

const FEEDBACK_POSTS_MOCK = [
    feedbackMock(),
    feedbackMock(),
    feedbackMock(),
] as any;

interface FeedbackStoreState {
    status: Status;
    posts: Feedback.Post[];
}

@Injectable()
export class FeedbackStore {

    private _store: Store<FeedbackStoreState>;
    private _request: Subscription;

    constructor(
        storeFactory: StoreFactory<FeedbackStoreState>,
        private _http: HttpService,
    ) {
        this._store = storeFactory.new(this._emptyState());
    }

    get posts() {
        return this._store.state.filter(state => state.status != Status.NotInitialized).map(state => state.posts);
    }

    get status() {
        return this._store.snapshot.status;
    }

    get(resourceId: string, filter: string) {
        this._store.nextState(state => ({
            status: Status.Loading,
            posts: [],
        }));

        if (this._request) {
            this._request.unsubscribe();
        }

        this._request = 
            // this._http.post(`/api/v1/resource/${resourceId}/feedback`, { filter })
            //     .map(response => response.json())
                Observable.create((observer: Observer<any>) => {
                    console.info(`TODO: call POST /api/v1/resource/${resourceId}/feedback`);

                    // simulate server loading
                    setTimeout(() => {
                        observer.next(FEEDBACK_POSTS_MOCK.slice());
                        observer.complete();
                    }, 250);
                })
                .subscribe(
                    posts => {
                        this._store.nextState(state => ({
                            status: Status.Ready,
                            posts
                        }));
                    },
                    error => {
                        this._store.nextState(state => ({
                            status: Status.Failed,
                            posts: [],
                        }));
                    });
    }

    private _emptyState() {
        return {
            status: Status.NotInitialized,
            posts: [],
        } as FeedbackStoreState;
    }
}

function feedbackMock() {
    return {  
        "created": 1493220932334,
        "rating": 5,  
        "messageBody": "This is incredible, I learned how to build Twitter with my BEAR hands and now I have so many ladies...",
        "messageTitle": "Ryan Rabideau",
        "isActive": true,
        "contribScore": 300,
    };
}