/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

const store = createStore({
    state: {
        centers: [],
        currentCenters: [],
        categories: [],
        currentCategory: 0,
        currentMarkers: [],
        page: 0,
        searchText: "",
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
        getCurrentMarkers(state) {
            return state.currentMarkers;
        },
        getPage(state) {
            return state.page;
        },
        getSearchText(state) {
            return state.searchText;
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
        setCurrentMarkers(state, markers) {
            state.currentMarkers = markers;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSearchText(state, text) {
            state.searchText = text;
        },
    },
    actions: {
        setCenters({ commit, state }, centers) {
            if (state.centers !== []) {
                // Merge old and new data
                let newCenters = state.centers.concat(centers);

                commit("setCenters", newCenters);
                commit("setCurrentCenters", [...newCenters]);
                //reset filters
                commit("setCurrentCategory", 0);
                commit("setSearchText", "");
            } else {
                commit("setCenters", centers);
                commit("setCurrentCenters", centers);
            }
        },
        setCategories({ commit }, categories) {
            commit("setCategories", categories);
        },
        setCurrentCategory({ commit, state }, categoryId) {
            let sortedCenters = filterByCategory(state.centers, categoryId);
            sortedCenters = filterByText(sortedCenters, state.searchText);

            commit("setCurrentCenters", sortedCenters);
            commit("setCurrentCategory", categoryId);
        },
        setCurrentMarkers({ commit }, markers) {
            commit("setCurrentMarkers", markers);
        },
        setPage({ commit }, page) {
            commit("setPage", page);
        },
        setSearchText({ commit, state }, text) {
            let sortedCenters = filterByText(state.centers, text);
            sortedCenters = filterByCategory(sortedCenters, state.currentCategory);

            commit("setCurrentCenters", sortedCenters);
            commit("setSearchText", text);
        },
    },
});

function filterByText(centers, text) {
    let sortedCenters = [];
    centers.forEach((center) => {
        if (center.name.includes(text) || center.description.includes(text) || center.leisureCategory[0].name.includes(text)) {
            sortedCenters.push(center);
        }
    });
    return sortedCenters;
}
function filterByCategory(centers, category) {
    let currentCenters = [];
    if (category === 0) {
        currentCenters = centers;
    } else {
        centers.forEach((center) => {
            if (center.leisureCategory[0].id == category) {
                currentCenters.push(center);
            }
        });
    }
    return currentCenters;
}
export default store;
