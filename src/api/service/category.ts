import { axiosInstance } from '../axios'

//카테고리 리스트 조회
export const getFullCategoryList = async () => {
  const res = await axiosInstance.get('s/admin/category')
  return res.data
}

//서브 카테고리 리스트 조회
export const getSubCategoryList = async (categoryName: string) => {
  const res = await axiosInstance.get(`s/admin/${categoryName}/subcategory`)
  return res.data
}
