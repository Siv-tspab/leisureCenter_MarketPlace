/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

const store = createStore({
    state: {
        centers: [],
        currentCenters: [],
        categories: [],
        currentCategory: {},
    },
    getters: {
        getCenters(state) {
            return state.centers;
        },
        getCurrentCenters(state) {
            return state.currentCenters;
        },
        getCategories(state) {
            return state.categories;
        },
        getCurrentCategory(state) {
            return state.currentCategory;
        },
    },
    mutations: {
        setCenters(state, centers) {
            state.centers = centers;
        },
        setCurrentCenters(state, centers) {
            state.currentCenters = centers;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        setCurrentCategory(state, category) {
            state.currentCategory = category;
        },
    },
    actions: {
        setCenters({ commit }, centers) {
            commit("setCenters", centers);
        },
        setCurrentCenters({ commit, state }, categoryId) {
            let currentCenters = [];
            if (categoryId === 0) {
                currentCenters = state.centers;
            } else {
                state.centers.forEach((center) => {
                    if (center.leisureCategory[0].id == categoryId) {
                        currentCenters.push(center);
                    }
                });
            }
            commit("setCurrentCenters", currentCenters);
        },
        setCategories({ commit }, categories) {
            commit("setCategories", categories);
        },
        setCurrentCategory({ commit, state }, categoryId) {
            state.categories.forEach((category) => {
                if (category.id == categoryId) {
                    commit("setCurrentCategory", category);
                }
            });
        },
    },
});

export default store;
