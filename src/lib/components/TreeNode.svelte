<script>
    export let node;
</script>

<div class="tree-node">
    <img src={node.avatarUrl} alt={node.name} class="avatar" />
    <span class="text">{node.name}</span>
</div>

<style>
    .tree-node {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 0.5rem;
    }
    .text {
        font-size: 1rem;
    }
</style>