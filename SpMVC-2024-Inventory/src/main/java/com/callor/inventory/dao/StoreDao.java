package com.callor.inventory.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.callor.inventory.model.StoreVO;

public interface StoreDao {

	@Select("select * from tbl_store")
	public List<StoreVO> findAllStore();

	@Select("select * from tbl_store where s_code=#{s_code}")
	public StoreVO findByCode(String s_code);

}
