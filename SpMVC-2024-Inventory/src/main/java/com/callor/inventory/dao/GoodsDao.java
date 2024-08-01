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

	@Update("update view_goods set g_count=#{g_count} where g_code=#{g_code} and g_storecode=#{g_storecode}")
	public int updateGoodsCount(GoodsVO goodsVO, String count);

}
