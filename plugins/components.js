import Vue from 'vue';
import Page from '~/components/Page.vue';
import Agentur from '~/components/Agentur.vue'
import Team from '~/components/Team.vue'
import Teammitglied from '~/components/Teammitglied.vue'
import Leistungen from '~/components/Leistungen.vue'
import Arbeit from '~/components/Arbeit.vue'

Vue.component('page', Page);
Vue.component('agentur', Agentur)
Vue.component('team', Team)
Vue.component('teammitglied', Teammitglied)
Vue.component('leistungen', Leistungen)
Vue.component('arbeit', Arbeit)