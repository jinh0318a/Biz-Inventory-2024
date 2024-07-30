package com.callor.inventory.dao;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;

import com.callor.inventory.model.ManagerVO;

public interface ManagerDao {

	@Select("select * from tbl_manager where m_id=#{id}")
	public ManagerVO findByID(String id);

	public int insert(ManagerVO managerVO);

	public int update(ManagerVO managerVO);

	@Delete("delete from tbl_manager where m_id=#{id}")
	public void delete(String id);
}
