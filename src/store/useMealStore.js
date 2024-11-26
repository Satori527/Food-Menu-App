import { create } from "zustand";

export const useMealStore = create((set, get) => ({
	meals: [],
	singleMeal: null,
	mealModal: false,
	loading: false,
	modalLoading: false,
	filter: "Indian",
	order: "Asc",
	error: null,

	setMeals: (meals) => set({ meals }),
	fetchAllMeals: async () => {
		set({ loading: true });
		try {
			const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian')
            .then(res=>res.json())
			console.log("response",response.meals);
			set({ meals: response.meals, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch meals", loading: false });
			console.log("Error fetching meals:", error);
		}
	},
	fetchSingleMeal: async (mealId) => {
		console.log("mealId", mealId);
		set({ modalLoading: true });
		try {
			const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
			.then(res=>res.json());
			console.log("response",response.meals[0]);
			set({ singleMeal: response.meals[0], modalLoading: false });
		} catch (error) {
			set({ error: "Failed to fetch meals", modalLoading: false });
			console.log("Error fetching single meal:", error);
		}
	},

	fetchMealsByArea: async (area) => {
		console.log("area", area);
		set({ loading: true });
		try {
			const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
			.then(res=>res.json());
			console.log("response",response.meals);
			set({ meals: response.meals,filter: area, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch meals", loading: false });
			console.log("Error fetching single meal:", error);
		}
	},

	sortMealsAsc: () => {
		set({ loading: true });
		console.log("sortMealsAsc");
		if((get().meals[0].strMeal.slice(0,1) > get().meals[get().meals.length-1].strMeal.slice(0,1))){
			const sortedMeals = get().meals.toReversed();
			set({ meals: sortedMeals,order: "Asc"});
		}
		set({ loading: false });
	//console.log(prm);
		
		
	},

	sortMealsDesc: () => {
		set({ loading: true });
		console.log("sortMealsDesc");
		if((get().meals[0].strMeal.slice(0,1) < get().meals[get().meals.length-1].strMeal.slice(0,1))){
			const sortedMeals = get().meals.toReversed();
			set({ meals: sortedMeals,order: "Desc"});
		}
		set({ loading: false });
	},



	toggleModal: (status) => {
		console.log("toggleModal");
		set({ mealModal: status, singleMeal: null });
		//console.log(mealModal);
	}
}));
