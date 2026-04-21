# Prompt Optimization Guidelines

## 1. Overview

This document establishes comprehensive guidelines for optimizing prompts across the application. All prompts should follow these structured optimization techniques to ensure consistent quality and performance.

## 2. Optimization Techniques

### 2.1 Clear Task Definition (清晰任务定义)

Every prompt must begin with a clear role and task definition:

**Components:**
- **Role Definition**: Who the AI is (e.g., "你是清华大帅，一位专业的学习规划老师")
- **Task Statement**: What the AI should do (e.g., "请为学生制定一份三阶段递进式学习计划")
- **Capability Description**: What the AI specializes in

**Example:**
```
你是清华大帅，一位专业的学习规划老师，擅长制定科学高效的学习计划。
请为${gradeGroup}${grade}学生制定一份三阶段递进式学习计划。
```

### 2.2 Context Specification (上下文规范)

Provide comprehensive context to ensure relevant outputs:

**Required Context Elements:**
- Student Information (年级、学科、学习情况)
- Task Parameters (时间、目标、限制条件)
- Relevant Background (薄弱环节、过往表现)

**Example:**
```
【学生信息】
- 年级：${grade}（${gradeGroup}）
- 学科：${subject}
- 目标分数：${targetScore}分
- 当前水平：${currentScore}分
- 差距：${gap}分
- 薄弱环节：${weakDesc}
```

### 2.3 Output Format Standardization (输出格式标准化)

Define clear output structure requirements:

**Format Components:**
- **Required Sections**: Must be present in every output
- **Optional Sections**: May be included when relevant
- **Structure Format**: markdown/JSON/table
- **Template Example**: Provide a concrete template

**Example:**
```
【输出格式要求 - 必须严格遵循】

## 📊 整体分析
简要分析学生现状、提分策略和薄弱环节应对思路

## 🏗️ 三阶段规划概览
| 阶段 | 天数 | 核心目标 | 重点内容 |
|------|------|----------|----------|
```

### 2.4 Constraint Clarification (约束说明)

Clearly state what the AI should and should not do:

**Positive Constraints (应该):**
- Use specific, actionable language
- Adjust difficulty for student grade level
- Provide detailed steps

**Negative Constraints (禁止):**
- Don't use special characters or underscores in names
- Don't provide generic advice
- Don't exceed response length limits

**Example:**
```
【约束条件】
1. 计划必须具体、可执行，明确到知识点和时间分配
2. 三个阶段要有明确的递进关系：基础→专项→冲刺
3. 不要使用特殊字符或下划线命名，使用中文标题
4. 表格必须使用标准markdown格式，列对齐用|分隔
```

### 2.5 Step-by-Step Guidance (分步指导)

For complex tasks, break into sequential phases:

**Example (三阶段学习计划):**
```
【阶段划分】
- 第一阶段（基础巩固）：${phase1Days}天 - 夯实基础，补齐知识漏洞
- 第二阶段（专项突破）：${phase2Days}天 - 攻克薄弱，提升解题能力
- 第三阶段（冲刺模拟）：${phase3Days}天 - 查漏补缺，模拟实战
```

### 2.6 Example Provision (示例提供)

When appropriate, include input-output examples:

**Example:**
```
请严格按照以下JSON格式输出：
{
  "question": "题目内容",
  "options": ["选项A", "选项B", "选项C", "选项D"],
  "correctIndex": 0
}
```

### 2.7 Error Prevention (错误预防)

Pre-empt common mistakes:

**Example:**
```
【重要校验】
首先判断"${topic}"是否属于${subject}学科的知识点：
- 如果明显不属于，请明确指出
- 如果勉强相关或不确定，可以继续但提醒学生注意
```

## 3. Prompt Structure Template

### 3.1 System Prompt
```
你是[角色]，擅长[专业领域]。
```

### 3.2 User Prompt Template
```
[任务描述]

【学生信息】
- [信息项1]：${value}
- [信息项2]：${value}

【输出格式要求 - 必须严格遵循】
## [必需章节1]
[内容要求]

## [必需章节2]
[内容要求]

【约束条件】
1. [约束1]
2. [约束2]
```

## 4. Quality Criteria

### 4.1 Accuracy (准确度)
- 输出内容是否符合学科标准
- 数据计算是否正确
- 知识点是否准确

### 4.2 Relevance (相关性)
- 输出是否紧密围绕用户问题
- 是否包含所有必要的上下文信息
- 建议是否针对具体情况

### 4.3 Completeness (完整性)
- 是否包含所有必需章节
- 每个章节是否有实质性内容
- 是否覆盖所有请求的信息

### 4.4 Format Adherence (格式遵循度)
- 是否遵循预定义的输出格式
- 表格是否使用正确的markdown语法
- 标题命名是否符合规范

### 4.5 Coherence (连贯性)
- 逻辑是否清晰
- 各部分是否相互关联
- 过渡是否自然

### 4.6 Concreteness (具体性)
- 建议是否具体可执行
- 是否有明确的时间框架
- 是否有可衡量的目标

### 4.7 Age Appropriateness (年级适配性)
- 语言难度是否适合目标学生
- 概念解释是否用学生能理解的方式
- 任务量是否适合学生水平

## 5. Version Control

### 5.1 Version Numbering
- Major.Minor.Patch (e.g., 2.0.0)
- Major: Breaking changes to prompt structure
- Minor: New sections or improved constraints
- Patch: Bug fixes or wording improvements

### 5.2 Version History Record
Each prompt maintains:
```typescript
versionHistory: [
  {
    version: '2.0.0',
    lastUpdated: '2026-04-21',
    author: 'Prompt Engineer',
    changelog: [
      '添加清晰任务定义和角色约束',
      '增强输出格式规范'
    ]
  }
]
```

### 5.3 Update Protocol
1. Document current version
2. Create new version with changes
3. Update changelog
4. Update metrics if available
5. Test with sample inputs

## 6. Testing Guidelines

### 6.1 Test Cases
- Minimum: 3 test cases per prompt
- Cover edge cases (e.g., low score, high target)
- Include grade-level variations

### 6.2 Evaluation Checklist
- [ ] All required sections present
- [ ] Format matches specification
- [ ] Content is accurate
- [ ] Language is appropriate for grade
- [ ] Constraints are followed

## 7. Common Pitfalls

### 7.1 Ambiguous Role Definition
❌ Poor: "你是一个AI助手"
✅ Good: "你是一位资深数学老师，擅长用通俗易懂的方式讲解数学概念"

### 7.2 Missing Constraints
❌ Poor: "请出一道题"
✅ Good: "请出一道选择题，难度符合基础题要求，选项要有迷惑性"

### 7.3 Vague Output Format
❌ Poor: "输出要有结构"
✅ Good: "必须包含以下章节：整体分析、三阶段规划、每日计划"

### 7.4 No Error Prevention
❌ Poor: "学生要学习这个知识点"
✅ Good: "首先判断知识点是否属于指定学科，如不属于请明确指出"

## 8. Best Practices Summary

1. **Be Specific**: Vague prompts produce vague outputs
2. **Be Structured**: Use consistent formatting across all prompts
3. **Be Constrained**: Clear constraints prevent unwanted behaviors
4. **Be Contextual**: Provide sufficient background information
5. **Be Iterative**: Version control enables continuous improvement
6. **Be Evaluated**: Regular metrics tracking identifies issues
7. **Be Consistent**: Follow established patterns across similar prompts

## 9. Metrics Collection

Track these metrics for each prompt:

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Accuracy | ≥0.90 | Manual review of outputs |
| Relevance | ≥0.90 | User feedback survey |
| Completeness | ≥0.85 | Section presence check |
| Format Adherence | ≥0.85 | Automated parsing |
| Response Time | ≤15s | System logs |

## 10. Revision Schedule

- **Weekly**: Review user feedback, identify common issues
- **Monthly**: Update metrics, refine constraints
- **Quarterly**: Major revision, update version numbers
