package com.project.Project.Management.System.service;

import com.project.Project.Management.System.modal.Comment;

import java.util.List;

public interface CommentService {
    Comment createComment(Long issueId, Long userId, String comment)throws Exception;

    void deleteComment(Long commentId,Long userId) throws Exception;

    List<Comment> findCommentByIssueId(Long issueId);
}
