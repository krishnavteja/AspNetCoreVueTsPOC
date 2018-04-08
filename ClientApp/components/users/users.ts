import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { IUser } from '../../models/user';


var options: any = {};
@Component(options)

export default class UsersComponent extends Vue {
    users: IUser[] = [];

    created() {
        this.$http.get('/api/User')
            .then(response => {
                this.users = response.data as IUser[];
            });

    }
}
