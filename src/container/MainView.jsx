import React, { Component } from 'react';
import MainItemList from '../container/MainItemList'

class MainView extends Component {
    constructor(props){
        super(props);
        this.state={
            resCategory:[{
                category:"book",
                categoryArray: [
                    {
                        "productImg": [
                            "Screenshot_20190923-093151_Instagram.jpg",
                            "Screenshot_20190923-093035_Instagram.jpg",
                            "Screenshot_20190923-093029_Instagram.jpg"
                        ],
                        "productId": "riJ3LVJd5",
                        "productName": "\"먹는건 왜 안팔아\"",
                        "productPrice": 500,
                        "category": "\"식권\"",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-23 11:48:42",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "Phpz2bz",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "IMAGE_201909231401283898815381258951739.jpg"
                        ],
                        "productId": "hHB4l0UvS",
                        "productName": "팔공티",
                        "productPrice": 500,
                        "category": "식권",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-23 02:01:54",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "HSZcefl",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "2019-09-17-19-27-38.jpg",
                            "2019-09-17-19-27-33.jpg"
                        ],
                        "productId": "j4TjJ3PVB",
                        "productName": "\"배고파\"",
                        "productPrice": 10001,
                        "category": "\"식권\"",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-17 07:44:56",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "SoOjU5S",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "IMG_20190909_012834_469.jpg",
                            "1567959979165.png"
                        ],
                        "productId": "WTb1H_6h8",
                        "productName": "\"식권\"",
                        "productPrice": 500,
                        "category": "\"식권\"",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-17 01:36:28",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "g8SjyfL",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "IMG_20190909_012834_469.jpg",
                            "1567959979165.png"
                        ],
                        "productId": "0iJlNMMr4",
                        "productName": "\"식권\"",
                        "productPrice": 500,
                        "category": "\"식권\"",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-17 01:35:52",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "g8SjyfL",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "Screenshot_20190916-211248_MySecondApp-201701708.jpg"
                        ],
                        "productId": "fLK7CFPgc",
                        "productName": "\"입력\"",
                        "productPrice": 200,
                        "category": "\"식권\"",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-17 01:11:03",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "g8SjyfL",
                        "__v": 0
                    }
                ]
            },{
                category:"ticket",
                categoryArray: [
                    {
                        "productImg": [
                            "IMAGE_201909231359314782051166248071379.jpg"
                        ],
                        "productId": "QoBErBOwy",
                        "productName": "이르르으음",
                        "productPrice": 1000,
                        "category": "\"책교양\"",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-23 01:59:43",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "eQC2gKX",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "1569201651959.png"
                        ],
                        "productId": "Xodhq4HJJ",
                        "productName": "\"ㅇㅇ\"",
                        "productPrice": 85,
                        "category": "\"책교양\"",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-23 01:47:53",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "eQC2gKX",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "20190909_115828.jpg"
                        ],
                        "productId": "KRo6N-EXw",
                        "productName": "\"컴네\"",
                        "productPrice": 10000,
                        "category": "\"책전공\"",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-23 01:35:50",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "nSJqMnj",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "20190920_005917.jpg",
                            "20190920_002420.jpg",
                            "20190920_001541.jpg"
                        ],
                        "productId": "YzbPKWpVn",
                        "productName": "\"resize\"",
                        "productPrice": 2,
                        "category": "\"책교양\"",
                        "sellerId": "201301484",
                        "productSelled": false,
                        "updateDate": "2019-09-20 03:45:29",
                        "sellerName": "임동완",
                        "sellerPhone": "01021675629",
                        "fileFolder": "Phpz2bz",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "1567959979165.png",
                            "1567959743858.jpg",
                            "IMG_20190909_012834_469.jpg",
                            "IMG_20190909_012834_466.jpg"
                        ],
                        "productId": "mDGKGwkDV",
                        "productName": "\"그엉\"",
                        "productPrice": 5956643,
                        "category": "\"책기타\"",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-11 04:59:13",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "ispo159",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "sample.jpeg",
                            "sample2.png"
                        ],
                        "productId": "iZQbWmIjM",
                        "productName": "전공책2",
                        "productPrice": 1000,
                        "category": "책전공",
                        "sellerId": "201301484",
                        "productSelled": false,
                        "updateDate": "2019-08-03 04:03:44",
                        "sellerName": "임동완",
                        "sellerPhone": "01012345678",
                        "fileFolder": "JZlTW3B",
                        "__v": 0
                    }
                ]
            },{
                category:"room",
                categoryArray: [
                    {
                        "productImg": [
                            "KakaoTalk_20190909_013008159.jpg"
                        ],
                        "productId": "SAqXfrp0S",
                        "productName": "자취방3",
                        "productPrice": 1000,
                        "category": "자취방",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-17 01:59:30",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "g8SjyfL",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "KakaoTalk_20190909_013008159.jpg"
                        ],
                        "productId": "oHy4vfTp3",
                        "productName": "자취방3",
                        "productPrice": 1000,
                        "category": "자취방",
                        "sellerId": "201701708",
                        "productSelled": false,
                        "updateDate": "2019-09-17 01:56:19",
                        "sellerName": "정고운",
                        "sellerPhone": "01041751643",
                        "fileFolder": "g8SjyfL",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "sample.jpeg",
                            "sample2.png"
                        ],
                        "productId": "j9wUA8Sx4",
                        "productName": "자취방3",
                        "productPrice": 1000,
                        "category": "자취방",
                        "sellerId": "201301484",
                        "productSelled": false,
                        "updateDate": "2019-08-03 04:04:27",
                        "sellerName": "임동완",
                        "sellerPhone": "01012345678",
                        "fileFolder": "JZlTW3B",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "sample.jpeg",
                            "sample2.png"
                        ],
                        "productId": "C1rmELt1p",
                        "productName": "자취방2",
                        "productPrice": 1000,
                        "category": "자취방",
                        "sellerId": "201301484",
                        "productSelled": false,
                        "updateDate": "2019-08-03 04:04:23",
                        "sellerName": "임동완",
                        "sellerPhone": "01012345678",
                        "fileFolder": "JZlTW3B",
                        "__v": 0
                    },
                    {
                        "productImg": [
                            "sample.jpeg",
                            "sample2.png"
                        ],
                        "productId": "AvhZu2TSs",
                        "productName": "자취방",
                        "productPrice": 1000,
                        "category": "자취방",
                        "sellerId": "201301484",
                        "productSelled": false,
                        "updateDate": "2019-08-03 04:04:20",
                        "sellerName": "임동완",
                        "sellerPhone": "01012345678",
                        "fileFolder": "JZlTW3B",
                        "__v": 0
                    }
                ]
            }]
        }
    }
    render() {
        return (
            <div>
                {this.state.resCategory.map((Data)=>{
                    return(<MainItemList key={Data.category} resData={Data.categoryArray}/>)
                })}
            </div>
        );
    }
}

export default MainView;