import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Unsubscriber, UnsubscriberFactory, Page } from 'app/shared';
import { FeedbackStore, ResourceStore } from 'app/stores';
import { Feedback, Resources } from 'app/models';

@Component({
    selector: 'resource',
    templateUrl: 'resource.html',
    host: {
        '[class.page]': 'true',
    }
})

export class ResourcePage extends Page implements OnInit {

    resource: Resources.Resource;

    relatedResources: Resources.Resource[];

    feedbackPosts: Feedback.Post[];

    get posts() { return this._feedbackStore.posts; }

    constructor(
        changeDetector: ChangeDetectorRef,
        unsubscriberFactory: UnsubscriberFactory,
        private _route: ActivatedRoute,
        private _feedbackStore: FeedbackStore,
        private _resourceStore: ResourceStore,
    ) { 
        super(changeDetector, unsubscriberFactory);
    }

    ngOnInit() {
        this.when(this._route.params, params => this.onParams(params));
        this.when(this._resourceStore.resource, resource => this.onResource(resource));
        this.when(this._feedbackStore.posts, posts => this.onFeedbackPosts(posts));
    }

    onParams(params: any) {
        this._resourceStore.get(params['resourceId']);
    }

    onResource(resource: Resources.Resource) {
        this.resource = resource;
        this.relatedResources = resource && resource.relatedResources;
    }

    onFeedbackPosts(posts: Feedback.Post[]) {
        this.feedbackPosts = posts;
    }

    loadFeedback(filter: string) {
        this._feedbackStore.get(this.resource.id, filter);
    }  
}