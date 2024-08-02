package com.callor.inventory.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.callor.inventory.model.GoodsVO;

public interface GoodsDao {

	@Select("select * from view_goods")
	public List<GoodsVO> findAllGoods();

	@Select("select * from view_goods where g_code=#{g_code}")
	public GoodsVO findByCode(String g_code);

	@Select("select * from view_goods where g_storecode=#{g_storecode}")
	public List<GoodsVO> findByStoreCode(String g_storecode);

	@Update("update view_goods set g_count=#{param1} where g_code=#{param2} and g_storecode=#{param3}")
	public int updateGoodsCount(String g_count, String g_code, String g_storecode);

	@Select("select * from view_goods where g_name like #{word}")
	public List<GoodsVO> searchByWord(String word);

	@Select("select * from view_goods where g_storecode=#{param1} and g_name like #{param2}")
	public List<GoodsVO> searchByStoreAndWord(String g_storecode, String word);

	@Select("select * from view_goods where g_storecode=#{param1} and (g_name like #{param2} or g_code like #{param2})")
	public List<GoodsVO> searchByWordOrCode(String g_storecode, String word);

}
