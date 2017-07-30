import {Injectable} from '@angular/core';

import {Headers, Http} from '@angular/http';
import {Course} from "./course.service";
import 'rxjs/add/operator/toPromise';

const categories: Category[] = [
    {
        name: 'A+ 经理',
        items: [
            {name: 'A+1阶复习课程', icon: 'account_circle'},
            {name: 'A+2阶预习课程', icon: 'card_giftcard'},
            {name: 'A+2阶复习课程', icon: 'compare_arrows'}]
    }, {
        name: '角色定位',
        items: [
            {name: '自我管理', icon: 'account_circle'},
            {name: '建立威信', icon: 'card_giftcard'},
            {name: '角色认知', icon: 'compare_arrows'},
            {name: '转型挑战', icon: 'dns'}]
    }, {
        name: '知人善任', items: [
            {name: '情境领导', icon: 'exit_to_app'},
            {name: '员工管理', icon: 'explore'},
            {name: '员工关系', icon: 'fingerprint'},
            {name: '有效授权', icon: 'language'},
            {name: '目标选才', icon: 'language'}]
    }, {
        name: '管理绩效', items: [
            {name: '员工激励', icon: 'perm_device_information'},
            {name: '员工辅导', icon: 'query_builder'},
            {name: '绩效反馈', icon: 'room'},
            {name: '绩效评估', icon: 'settings_bluetooth'},
            {name: '考核制定', icon: 'shopping_cart'},
            {name: '委派任务', icon: 'timeline'},
            {name: '设定目标', icon: 'explore'}]
    }, {
        name: '管理精力', items: [
            {name: '创新基因', icon: 'watch_later'},
            {name: '精力提升', icon: 'album'},
            {name: '时间管理', icon: 'games'},
            {name: '会议管理', icon: 'hearing'}]
    }, {
        name: '高效团队', items: [
            {name: '项目管理', icon: 'recent_actors'},
            {name: '团队文化', icon: 'subtitles'},
            {name: '团队冲突', icon: 'import_contacts'},
            {name: '流程制度', icon: 'speaker_phone'},
            {name: '管理团队', icon: 'drafts'},
            {name: '分工调配', icon: 'link'},
            {name: '组建团队', icon: 'inbox'}]
    }, {
        name: '管理协作', items: [
            {name: '生产管理', icon: 'dvr'},
            {name: '说服技巧', icon: 'location_searching'},
            {name: '有效沟通', icon: 'wallpaper'},
            {name: '人际关系', icon: 'attach_file'},
            {name: '跨部门协作', icon: 'bubble_chart'},
            {name: '关键对话', icon: 'format_list_numbered'}]
    }, {
        name: '向上管理', items: [
            {name: '汇报演讲', icon: 'merge_type'},
            {name: '影响上级', icon: 'wrap_text'},
            {name: '支持上级', icon: 'desktop_mac'},
            {name: '赢得上级信任', icon: 'phone_iphone'},
            {name: '理解组织', icon: 'videogame_asset'},
            {name: '理解上级', icon: 'assistant'}]
    }, {
        name: '成熟蜕变', items: [
            {name: '职业生涯', icon: 'grade'},
            {name: '个人魅力', icon: 'group_work'},
            {name: '领导风格', icon: 'redeem'},
            {name: '领导艺术', icon: 'schedule'},
            {name: '社会认知', icon: 'work'},
            {name: '决策管理', icon: 'airplay'},
            {name: '思维方法', icon: 'hearing'},
            {name: '影响力', icon: 'call_merge'},
            {name: '情绪压力', icon: 'filter_list'}]
    }
];

@Injectable()
export class CategoryService {
    private categoryUrl = '/categories';

    constructor(private http: Http) {
    }

    all(): Category[] {
        return categories;
    }

    getCourses(name: string): Promise<Course[]> {
        const url = `${this.categoryUrl}/${name}`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json() as Course[]
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

export interface Item {
    name: string;
    icon: string;
}

export interface Category {
    name: string;
    items: Item[];
}