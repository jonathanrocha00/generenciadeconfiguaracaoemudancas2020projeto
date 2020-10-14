class Executor {
    execute(commands) {
        commands.forEach(command => {
            return command.execute();
        });
    }
}

module.exports = Executor;