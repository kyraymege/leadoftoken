import { publicRequest } from "./requestMethods";
import { loginFailure, loginStart, loginSuccess, logout } from "./authSlice"
import { fetchTokensStart, fetchTokensSuccess, fetchTokensFailure } from "./tokenSlice";
import { toast } from "react-toastify";


//register
export const register = async (user, router) => {
    try {
        const res = await publicRequest.post("/auth/register", user);
        if (res) {
            toast.success(res?.data?.message);
        }
        setTimeout(() => {
            router.push('/auth')
        }, 1000)
    } catch (err) {
        toast.error(err);
    }
}

//login
export const login = async (dispatch, user, router) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        if (res.data) {
            toast.success(res?.data?.message);
            setTimeout(() => {
                router.push('/')
            }, 1000)
        }
    } catch (err) {
        dispatch(loginFailure())
    }
}

//Login Google
export const loginWithGoogle = async (dispatch, result, router) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/googleLogin", {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
        });
        dispatch(loginSuccess(res.data));
        if (res.data) {
            toast.success("You have successfully logged in");
        }
        setTimeout(() => {
            router.push('/')
        }, 1000)

    } catch (err) {
        dispatch(loginFailure());
    }
}

// Logout
export const logOut = async (dispatch) => {
    dispatch(logout());
}

// AddToken
export const addToken = async (token, router) => {
    try {
        await publicRequest.post("/token/newToken", token);
        toast.success("The token was successfully added. It will be published after the review.");
        setTimeout(() => {
            router.push('/')
        }, 3000)
    } catch (error) {
        console.log(error)
    }
}

// AddNews
export const addNews = async (news, router) => {
    try {
        await publicRequest.post("/news/newArticle", news);
        toast.success("The News was successfully added.");
        setTimeout(() => {
            router.push('/news')
        }, 3000)
    } catch (error) {
        console.log(error)
    }
}

// uploadImage
export const uploadImage = async (data) => {
    try {
        await publicRequest.post("/upload", data);
    } catch (error) {
        console.log(error)
    }
}

//Fetch All Tokens
export const fetchAllTokens = async (dispatch, page, as) => {
    dispatch(fetchTokensStart());
    try {
        const res = await publicRequest.get("/token/publicToken?page=" + page + "&as=" + as);
        dispatch(fetchTokensSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const fetchPromotedTokens = async () => {
    try {
        return await publicRequest.get("/token/promoted");

    } catch (err) {
        console.log(err)
    }
}

export const fetchAllTokensId = async () => {
    try {
        return await publicRequest.get("/token/getAllTokensId").then(res => res.data);
    } catch (err) {
        console.log(err)
    }
}

export const fetchRandomTokens = async () => {
    try {
        return await publicRequest.get("/token/getRandomTokens");

    } catch (err) {
        console.log(err)
    }
}

//most claps
export const getMostClaps = async () => {
    try {
        return await publicRequest.get("/news/mostClaps");
    } catch (err) {
        console.log(err)
    }
}

//get promoted news
export const getPromotedNews = async () => {
    try {
        return await publicRequest.get("/news/promoted");
    } catch (err) {
        console.log(err)
    }
}

//get news
export const getNews = async (count) => {
    try {
        return await publicRequest.get("/news/getNews?count=" + count);
    } catch (err) {
        console.log(err)
    }
}

//Fetch a token
export const fetchToken = async (token) => {
    try {
        return await publicRequest.get("/token/find/" + token);

    } catch (err) {
        console.log(err)
    }
}

//Fetch a token
export const fetchNews = async (news) => {
    try {
        return await publicRequest.get("/news/find/" + news);
    } catch (err) {
        console.log(err)
    }
}

// vote Token
export const voteToken = async (user_id, token_id) => {
    try {
        const res = await publicRequest.post("/token/vote/" + token_id, { user_id });
        toast.success(res.data)
    } catch (error) {
        console.log(error)
    }
}

// Clap News
export const clapNews = async (user_id, news_id) => {
    try {
        const res = await publicRequest.post("/news/clap/" + news_id, { user_id });
        toast.success(res.data)
    } catch (error) {
        console.log(error)
    }
}


// AddWatchList
export const addWatchList = async (user_id, token_id) => {
    try {
        const res = await publicRequest.put("/token/addWatchList/" + token_id, { user_id });
        toast.success(res.data)
    } catch (error) {
        console.log(error)
    }
}

//Get user
export const getUser = async (user_id) => {
    try {
        return await publicRequest.get("/user/find/" + user_id);

    } catch (err) {
        console.log(err)
    }
}

//Get token length
export const getTokensLength = async () => {
    try {
        return await publicRequest.get("/token/getTokenLength");

    } catch (err) {
        console.log(err)
    }
}

//Get Today's Best Token
export const getTodaysBestToken = async () => {
    try {
        return await publicRequest.get("/token/getTodaysBestToken");

    } catch (error) {
        console.log(error)
    }
}

//Get Yesterday's Best Token
export const getYesterdaysBestToken = async () => {
    try {
        return await publicRequest.get("/token/getYesterdaysBestToken");

    } catch (error) {
        console.log(error)
    }
}

//Get All Tokens
export const getSearchedToken = async (searchTerm) => {
    try {
        return await publicRequest.get("/token/getSearchedToken/" + searchTerm);
    } catch (error) {
        console.log(error)
    }
}

//Get Creator's Tokens
export const getCreatorsTokens = async (user_id) => {
    try {
        return await publicRequest.get("/token/getCreatorsTokens/" + user_id);
    } catch (error) {
        console.log(error);
    }
};

//Delete token
export const deleteToken = async (id, router) => {
    try {
        await publicRequest.delete("/token/" + id).then((res) => {
            toast.success(res?.data);
            setTimeout(() => {
                router.push('/')
            }, 3000)
        })
    } catch (error) {
        console.log(error);
    }
};

//Delete News
export const deleteNews = async (id, router) => {
    try {
        await publicRequest.delete("/news/" + id).then((res) => {
            toast.success(res?.data);
            setTimeout(() => {
                router.push('/news')
            }, 3000)
        })
    } catch (error) {
        console.log(error);
    }
};

//Update token
export const updateToken = async (id, token, router) => {
    await publicRequest.put("/token/" + id, token).then((res) => {
        toast.success(res?.data?.message);
        setTimeout(() => {
            router.push('/token/' + id)
        }, 3000)
    }).catch((err) => {
        console.log(err)
    })

}

//Update News
export const updateNews = async (id, news, router) => {
    await publicRequest.put("/news/" + id, news).then((res) => {
        toast.success(res?.data?.message);
        setTimeout(() => {
            router.push('/news')
        }, 3000)
    }).catch((err) => {
        console.log(err)
    })
}

//Get User's News
export const getUserNews = async (user_id) => {
    try {
        return await publicRequest.get("/news/getUsersNews/" + user_id);
    } catch (error) {
        console.log(error);
    }
}



