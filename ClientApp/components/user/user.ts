import Vue, { ComponentOptions, } from 'vue';
import VueResource from 'vue-resource';
import { Component } from 'vue-property-decorator';
import { IUser } from '../../models/user';

var options: any = {};
@Component(options)

export default class UserComponent extends Vue {
    user = <IUser>{};

    created() {
        if (this.$route.params.id) {
            this.$http.get(`/api/User/${this.$route.params.id}`)
                .then(response => {
                    this.user = response.data as IUser;
                });
        }
    }

    saveUser() {

        if (this.isValid()) {
            this.$http.post('/api/user', this.user)
                .then(response => {
                    var data = response.data as IUser;
                    alert(`Successfully saved data for user ${data.firstName} ${data.lastName}`);
                });
        }
    }

    isValid() {
        return this.user.firstName && this.user.lastName;
    }
}
