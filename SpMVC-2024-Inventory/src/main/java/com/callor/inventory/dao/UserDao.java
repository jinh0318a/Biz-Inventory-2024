package com.callor.inventory.dao;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;

import com.callor.inventory.model.UserVO;

public interface UserDao {

	@Select("select * from tbl_user where u_id=#{id}")
	public UserVO findByID(String id);

	public int insert(UserVO userVO);

	public int update(UserVO userVO);

	@Delete("delete from tbl_user where u_id=#{u_id}")
	public void delete(String u_id);
}
