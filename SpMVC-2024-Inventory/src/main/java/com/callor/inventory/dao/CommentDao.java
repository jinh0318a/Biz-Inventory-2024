package com.callor.inventory.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.callor.inventory.model.CommentVO;

public interface CommentDao {

	@Select("select * from tbl_comment where c_boardcode=#{b_code}")
	public List<CommentVO> findByBoard(String b_code);

	@Delete("delete from tbl_comment where c_code=#{c_code}")
	public int delete(String c_code);

	@Update("update tbl_comment set c_body=#{c_body} where c_code=#{c_code}F")
	public boolean update(CommentVO commentVO);

	@Select("select * from tbl_comment where c_writer=#{u_id}")
	public List<CommentVO> findByUserID(String u_id);

	@Select("select * from tbl_comment where c_writer=#{m_id}")
	public List<CommentVO> findByManagerID(String m_id);

	@Insert("insert into tbl_comment(c_body, c_writer, c_writed_at, c_boardcode) values(#{c_body},#{c_writer},#{c_writed_at},#{c_boardcode})")
	public int insert(CommentVO commentVO);

	@Select("select * from tbl_comment where c_code=#{c_code}")
	public CommentVO findByCode(String c_code);
}